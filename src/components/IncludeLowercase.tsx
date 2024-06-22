type IncludeLowercaseProps = {
  includeLowercase: boolean;
  setIncludeLowercase: (include: boolean) => void;
};
export default function IncludeLowercase({
  includeLowercase,
  setIncludeLowercase,
}: IncludeLowercaseProps) {
  function handleIncludeLowercaseChange() {
    setIncludeLowercase(!includeLowercase);
  }
  return (
    <div className="mb-2">
      <input
        type="checkbox"
        id="includeLowercase"
        checked={includeLowercase}
        className="mr-2"
        onChange={handleIncludeLowercaseChange}
      />
      <label htmlFor="includeLowercase">Include Lowercase Letters</label>
    </div>
  );
}
