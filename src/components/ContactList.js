// import react from "react";
// import ContactCard from "./ContactCard";


// const ContactList = (props) => {
//     console.log(props);

//     const renderContactList = props.contacts.map((contact) => {
//         return(
//        <ContactCard contact={contact}></ContactCard>
//        );
//     });
//     return(
//         <div className="ui celled list">
//             {renderContactList}
//              </div>
//     );
// }

// export default ContactList


import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;