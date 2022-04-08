import bma from '../images/logos/bma.jpg';
import bmt from '../images/logos/bmt.jpg';
import capita from '../images/logos/capita.jpg';
import bwin from '../images/logos/bwin.jpg';
import orange from '../images/logos/orange.jpg';
import concep from '../images/logos/concep.jpg';
import theGroup from '../images/logos/the-group.jpg';


function Portfolio(){
    return (
    <section id='portfolio'>
        <br/>
        <h2>Portfolio</h2>
        <div className="portfolio">
            <div>
                <figure><img alt='bma logo' src={bma} /></figure>
                <figure><img alt='bwin logo' src={bwin} /></figure>
                <figure><img alt='concep logo' src={concep} /></figure>
                <figure><img alt='bmt logo' src={bmt} /></figure>
                <figure><img alt='the group logo' src={theGroup} /></figure>
                <figure><img alt='orange logo' src={orange} /></figure>
                <figure><img alt='' src={capita} /></figure>
            </div>
        </div>
    </section>
    );
}
export default Portfolio;