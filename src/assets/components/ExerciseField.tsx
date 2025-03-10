import SetField from "./SetField";

interface props {
  label: string;
  amountOfSets: number;
}
const ExerciseField = ({ label, amountOfSets }: props) => {
  return (
    <>
      <div className="border-4 border-red-600 p-3 rounded-md m-5 shadow-xl w-4/5 justify-self-center">
        <h1>{label}</h1>
        {Array.from({ length: amountOfSets }).map((_, index) => (
          <SetField key={index} />
        ))}
      </div>
    </>
  );
};

export default ExerciseField;
