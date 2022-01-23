interface ContainerProps {
  children: React.ReactNode;
}

function Container(props: ContainerProps) {
  return <div className="px-14 py-6">{props.children}</div>;
}

export default Container;
