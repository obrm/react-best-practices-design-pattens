const inputs = [
  { label: 'First Name', type: 'text', name: 'firstName' },
  { label: 'Last Name', type: 'text', name: 'lastName' },
  { label: 'Email', type: 'email', name: 'email' }
];

function Form() {
  return (
    <form>
      {inputs.map((input) => (
        <div key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input type={input.type} name={input.name} id={input.name} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
