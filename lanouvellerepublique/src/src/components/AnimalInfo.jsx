import './AnimalInfo.css';
import { useNavigate } from "react-router-dom";

function AnimalInfo({ animal }) {
    const navigate = useNavigate();

    const displayedAnimal = animal ?? {};
    
    const goToMap = () => {
        const param = displayedAnimal.name;
        navigate(`/map?animal=${param}`);
    };

    return (
        <div className={`animal-info-parent-container ${animal ? 'visible' : ''}`}>
            <div className='image_container'>
                {animal && <img src={animal.svg}></img>}
            </div>
            <div 
                className={`animal-info-container ${animal ? 'visible' : ''} animal_presentation`} 
            >
                <div className='top_section'>
                    <div className='image_offset'>
                    </div>
                    <div className='text_container'>
                        <h3>{displayedAnimal.fullname}</h3>
                        <p>Vous avez cliqué sur mon profil ? Laissez moi vous en dire un peu plus.</p>
                    </div>
                </div>
                <div className='bottom_section'>
                    <a onClick={goToMap}>Découvrir</a>
                </div>
            </div>
        </div>
        
    )
}

export default AnimalInfo;
