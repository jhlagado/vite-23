export interface Props {
    name: string;
    title: string;
}

export default function App (props: Props) {
  return (
    <div className="rounded-full bg-red-500 text-green-500">Light!</div>
  );
}

