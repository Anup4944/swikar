type TProps = {
  title: string;
  description: string;
  bathNum?: number;
};

export default function Boz({ title, description, bathNum }: TProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{bathNum}</p>
    </div>
  );
}
