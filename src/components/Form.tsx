const myForm = {
  name: "myForm",
  fields: [ 
    { name: "username", label: "Username", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" }
  ]
};

export type MyForm = typeof myForm;






export default function Form() {
  return (
    <form name={myForm.name}>   
        {myForm.fields.map(field => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input type={field.type} id={field.name} name={field.name} />
          </div>
        ))}
    </form>
  );
}

