import { Dialog, Box, Button } from "@mui/material";
import "./LoginDialog.css";

const LoginDialog = () => {
  const dialogStyle = {
    height: "80%",
    width: "70%",
    maxWidth: "100%",
    overflow: 'hidden'
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <div className="login">
        <div className="login_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt=""
          />
          <div className="login_text">
            <h1>Sign in to WhatsApp</h1>
          </div>
          <Button type="submit">Sign in With Google</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginDialog;
