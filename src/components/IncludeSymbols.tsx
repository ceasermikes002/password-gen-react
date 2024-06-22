type IncludeNumbersProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
};
export default function IncludeSymbols({
  includeSymbols,
  setIncludeSymbols,
}: IncludeNumbersProps) {
  function handleIncludeSymbolsChange() {
    setIncludeSymbols(!includeSymbols);
  }
  return (
    <div className="mb-2">
      <input
        type="checkbox"
        id="includeSymbols"
        checked={includeSymbols}
        className="mr-2"
        onChange={handleIncludeSymbolsChange}
      />
      <label htmlFor="includeSymbols">Include Symbols</label>
    </div>
  );
}
