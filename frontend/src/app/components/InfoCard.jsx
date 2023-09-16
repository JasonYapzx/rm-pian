import Box from '@mui/material/Box';

const InfoCard = (props) => {
    return (
        <Box boxShadow={3} borderRadius={3}>
            <div className="p-4 w-fit flex flex-col gap-5">
                <div className='text-base font-semibold'>{props.title}</div>
                {Object.entries(props.content).map(([key, value]) => (
                    <div key={key}>
                    <div className='text-xs font-extralight'>{key}</div>
                    <div className='text-xs font-normal'>{value}</div>
                    </div>
                ))}
            </div>
        </Box>
    );
}

export default InfoCard;