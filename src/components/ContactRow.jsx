
const ContactRow = ({contact, setSelectedContactId, testdata}) => {
    console.log(setSelectedContactId)
    return (
        <tr onClick={()=>{
            setSelectedContactId(contact.id);
            }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}
export default ContactRow

//HAD NO IDEA WHY IT WASNT TAKING THE PASSED 'setSelectedContactId 'PROP, so i console logged test data and now it accepts it. also the arrangment in which things are passed to a function matter?