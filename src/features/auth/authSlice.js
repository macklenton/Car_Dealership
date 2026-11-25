import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Safely read data from localStorage
const readStorage = (key, fallback) => {
  try {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : fallback;
  } catch {
    return fallback;
  }
};

const savedUser = readStorage("apex_user", null);

const initialState = {
  user: savedUser,
  isAuthenticated: Boolean(savedUser),
  loading: false,
  error: null,
};

// Register a new user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const users = readStorage("apex_users", []);

      const email = userData.email.trim().toLowerCase();

      const exists = users.some(
        (user) => user.email.toLowerCase() === email
      );

      if (exists) {
        return rejectWithValue(
          "An account with this email already exists."
        );
      }

      if (!["customer", "seller"].includes(userData.role)) {
        return rejectWithValue("Invalid account role.");
      }

      const newUser = {
        id: Date.now(),
        name: userData.name.trim(),
        email,
        password: userData.password,
        role: userData.role,
      };

      users.push(newUser);

      localStorage.setItem("apex_users", JSON.stringify(users));

      const sessionUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      };

      localStorage.setItem(
        "apex_user",
        JSON.stringify(sessionUser)
      );

      return sessionUser;
    } catch {
      return rejectWithValue("Registration failed. Please try again.");
    }
  }
);

// Login an existing user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const users = readStorage("apex_users", []);

      const matchedUser = users.find(
        (user) =>
          user.email.toLowerCase() === email.trim().toLowerCase() &&
          user.password === password
      );

      if (!matchedUser) {
        return rejectWithValue("Invalid email or password.");
      }

      const sessionUser = {
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
        role: matchedUser.role,
      };

      localStorage.setItem(
        "apex_user",
        JSON.stringify(sessionUser)
      );

      return sessionUser;
    } catch {
      return rejectWithValue("Login failed. Please try again.");
    }
  }
);

// Logout the current user
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async () => {
    localStorage.removeItem("apex_user");
    return null;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // Registration
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed.";
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed.";
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { clearAuthError } = authSlice.actions;

export default authSlice.reducer;