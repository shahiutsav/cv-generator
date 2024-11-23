import { forwardRef } from "react";
import styles from "./ProfileEditor.module.css";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import { Button } from "@/components/ui/Button/Button";
import { ChevronDown } from "lucide-react";

const ProfileEditor = () => {
  return (
    <div className={styles.profileEditor}>
      <ProfileInformation />
    </div>
  );
};

export default ProfileEditor;

const ProfileInformation = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles.profileInformation, className)}
    {...props}
  >
    <Card>
      <CardHeader>
        <CardTitle
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Profile
          <ChevronDown style={{ width: "20px", height: "20px" }} />
        </CardTitle>
        <CardDescription>Edit your profile information.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button variant="secondary" style={{ width: "100%" }}>
          Save
        </Button>
      </CardFooter>
    </Card>
  </div>
));

ProfileInformation.displayName = "ProfileInformation";

ProfileInformation.propTypes = {
  className: PropTypes.string,
};
