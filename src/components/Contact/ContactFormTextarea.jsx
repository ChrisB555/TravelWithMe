import { ContactTextarea, ErrorP, ContactLabel } from "./Contact.style";

const ContactFormTextarea = ({
  name,
  handleChangeTextarea,
  type,
  value,
  error,
}) => {
  return (
    <>
      <ContactLabel>{name} :</ContactLabel>
      <ContactTextarea
        placeholder={name}
        defaultValue={value}
        onBlur={(e) => handleChangeTextarea(e, name)}
        type={type}
      />
      {error && <ErrorP>{error}</ErrorP>}
    </>
  );
};

export default ContactFormTextarea;
