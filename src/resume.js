import './resume.css';


export function Resume() {
    return (<ResumeBox/>);
}

function ResumeBox() {
    return (
        <article class="middleBlock">
          <ResumeImage />
        </article>
      );
}


function ResumeImage() {
  return (
    <>
      <p><img class="resume"  height="50%"src="./images/robert_wyatt.jpg" alt="Robert's resume"/></p>
    </>
  );
}
