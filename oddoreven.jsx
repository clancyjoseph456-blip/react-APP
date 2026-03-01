function OddEven(props) {
  return (
    <div>
      <p>The number {props.num} is: {props.num % 2 === 0 ? "Even" : "Odd"}</p>
    </div>
  );
}
export default OddEven;