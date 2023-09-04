import { Dialog } from "@mui/material";

const ChatDialog = () => {


    const dialogStyle = {
        height: "95%",
        width: "95%",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: 'hidden'
    };



    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
            Hello
        </Dialog>
    );
};

export default ChatDialog;