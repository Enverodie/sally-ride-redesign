import Image from './index_images/seal.png';

function MissionSealImage({height}) {
    return ( 
        <img 
            src={Image} 
            alt="Mission seal" 
            aria-hidden="true" 
            style={{
                borderRadius: '50%',
                width: '100%',
                height: height || '100%',
                objectFit: 'contain',
                position: 'relative',
                filter: `drop-shadow(var(--imageDropShadow))`,
            }} 
            /> 
    );
}

export default MissionSealImage;