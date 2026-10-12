
//Lupe note - this component is stictly UI - Logic stays in the parent component.
//  Refer below for how it should be used in parent in component.
{/* <Button onClick={() => acceptChargeback(id)}>Accept</Button>
    <Button variant="secondary">Cancel</Button>
    <Button type="submit">Submit dispute</Button>
    <Button disabled={!isValid}>Submit</Button> */}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-ink text-stone",
  secondary: "border border-ink/30 bg-transparent text-ink hover:bg-ink/5",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink
        disabled:cursor-not-allowed disabled:opacity-40
        ${variants[variant]} ${className}`}
      {...props}
    />
  );
}