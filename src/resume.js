import './resume.css';


export function Resume() {
    return (<ResumeBox/>);
}

function ResumeBox() {
    return (
        <>
          <ResumeImage />
        </>
      );
}


function ResumeImage() {
  return (
    <>
      <p><img class="resume" src="./images/robert_wyatt.jpg" alt="Robert's resume"/></p>
    </>
  );
}
