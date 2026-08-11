import { memo } from "react";

const students = ["Aarav", "Meera", "Kabir", "Ananya", "Riya", "Vikram"];

const StudentList = memo(({ course }) => {
  console.log(
    "%cStudentList rendered",
    "color: #dc2626; font-weight: bold; font-size: 14px",
  );

  // Intentional deterministic work makes the component easier to notice in
  // Profiler. It represents an expensive calculation and is only for teaching.
  let demoChecksum = 0;
  for (let index = 0; index < 1_500_000; index += 1) {
    demoChecksum += index % 10;
  }

  return (
    <section className="student-card" data-demo-checksum={demoChecksum}>
      <div>
        <span className="eyebrow">CHILD COMPONENT</span>
        <h3>Students in {course}</h3>
      </div>

      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </section>
  );
});

export default StudentList;
