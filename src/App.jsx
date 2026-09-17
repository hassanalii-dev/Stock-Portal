import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  SignIn,
} from "@clerk/react";

function App() {
  return (
    <div>
      <h1>We are in App.jsx</h1>

      <Show when="signed-out">
        <p>You are not signed in</p>

        <SignIn
          fallbackRedirectUrl="/dashboard"
          forceRedirectUrl="/dashboard"
        />

        <SignInButton />
        <SignUpButton />
      </Show>

      <Show when="signed-in">
        <p>You are signed in</p>

        <UserButton />
      </Show>
    </div>
  );
}

export default App;