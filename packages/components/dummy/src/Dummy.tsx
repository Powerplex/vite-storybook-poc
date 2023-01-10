interface Props {
  label?: string;
}

export const Dummy = ({ label = "Dummy component" }: Props) => {
  return <p>{label}</p>;
};
