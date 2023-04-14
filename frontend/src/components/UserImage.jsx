import { Avatar } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Avatar
      sx={{ width: size, height: size }}
      alt="user"
      src={`http://localhost:3001/assets/${image}`}
    />
  );
};

export default UserImage;
