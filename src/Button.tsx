interface Props {
  label: string;
  onClick: () => void;
}

export const Buttom = ({ label, onClick }: Props) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {label}
    </button>
  );
};
