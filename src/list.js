import data from "./data";

const List = function ({ people }) {
  return (
    <>
      {people.map((person) => {
        const { age, id, image, job, name, salary } = person;

        return (
          <article key={id} className="flex-container">
            <div className="list">
              <img src={image} alt={name} />
            </div>
            <div className="person-details">
              <div>Name: {name}</div>
              <div> Age: {age}</div>
              <div> Job: {job}</div>
              <div> Sgalary: ${salary}</div>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
