import './imageBars.css';

export function LeftImageBar(){
    return(
    <aside><img id="leftImageBar" class="sideBar" src="images/ucrImageLeft.jpg" alt="UCR path with trees"/></aside>);
}

export function RightImageBar  (){
    return (<aside><img id="rightImageBar" class="sideBar" src="images/ucrImageRight.jpg" alt="UCR university sign and clock tower"/></aside>);
}




//export default  {RightImageBar, LeftImageBar};