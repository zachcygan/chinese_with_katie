interface ExpectationsProps {
  component: React.ComponentType<any>;
  text: string;
}

export default function Expectations({ component: Component, text }: ExpectationsProps) {
  return (
    <div className="flex flex-col">
      <div className="py-20 scale-50 hover:scale-75 transition">
        <Component />
      </div>
      <div className="">
        <div className="text-2xl">{text}</div>
      </div>
    </div>
  )
}