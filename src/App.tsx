interface Props {
  children: React.ReactElement;
}

function App({ children }: Props) {
  console.log("kakak");

  return children;
}

export default App;
