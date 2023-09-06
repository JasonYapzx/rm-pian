import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BandIcon from '../../../../public/The1975cover.jpg'
import InfoCard from '../../components/InfoCard';
import { Content } from 'next/font/google';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import BasicTable from '../../components/BasicTable'

const TicketsPage = () => {
    const overviewContent = {
        'MAX TOTAL SUPPLY': '759 The 1975 Tickets',
        'HOLDERS': 483,
        'TOTAL TRANSFERS': 1631
    }
    const marketContent = {
        'MIN PRICE (24H)': '$10,895.98 @ 6.6660000 ETH',
        'MAX PRICE (24H)': '$12,913.02 @ 7.9000000 ETH'
    }
    const otherContent = {
        'TOKEN CONTRACT': '0x7a63d17F5a59BCA04B6702F461b1f1A1c59b100B'
    }
    const headers = [
        'Txn Hash',
        'Method',

    ]

    return (
        <div className='mx-24'>
            <div className='flex flex-row gap-2 items-center border-b-2 py-5'>
                <img src='/The1975cover.jpg' alt='1975 Cover' className='rounded-full h-8 w-8' />
                <div className='text-lg font-bold'>Token</div>
                <div className='text-lg'>The 1975 Concert At their very best</div>
                <HelpOutlineIcon className='flex text-gray-300 h-5 w-5' />
            </div>
            <div className='flex flex-row mt-9'>
                <div className='flex border border-gray-500 rounded-full w-fit px-2 py-1.5 text-xs align-center'>ERC-721</div>
                <button className='flex flex-row ml-auto border border-gray-500 rounded-md hover:bg-gray-200 items-center align-middle px-0.5'>
                    <LanguageIcon className='flex h-5 w-5 text-blue-500' />
                    <KeyboardArrowDownIcon className='text-gray-500' />
                </button>
                <button className='flex flex-row rounded-md p-0.5 border border-gray-400 ml-1 w-fit hover:bg-gray-200'>
                    <div >More</div>
                    <KeyboardArrowDownIcon className='text-gray-500' />
                </button>
            </div>

            <div className='flex flex-row mt-2 gap-4 justify-center'>
                <InfoCard title='Overview' content={overviewContent} />
                <InfoCard title='Market' content={marketContent} />
                <InfoCard title='Other Info' content={otherContent} />
            </div>

            <div className='flex flex-row gap-2 items-center mt-8 justify-center'>
                <button className='text-center align-middle rounded-md bg-blue-500 text-white text-xs px-2.5 py-1'>Transfers</button>
                <button className='rounded-md bg-gray-200 hover:bg-gray-300 w-fit px-2.5 py-1 text-xs'>Holders</button>
                <button className='rounded-md bg-gray-200 hover:bg-gray-300 w-fit px-2.5 py-1 text-xs'>Inventory</button>
                <button className='rounded-md bg-gray-200 hover:bg-gray-300 w-fit px-2.5 py-1 text-xs'>Info</button>
                <button className='rounded-md bg-gray-200 hover:bg-gray-300 w-fit px-2.5 py-1 text-xs'>NFT Trades</button>
                <button className='rounded-md bg-gray-200 hover:bg-gray-300 w-fit px-2.5 py-1 text-xs'>Contract</button>
                <button className='rounded-md bg-gray-200 hover:bg-gray-300 w-fit px-2.5 py-1 text-xs'>Comments</button>
                <SearchIcon className='rounded-md bg-gray-300 hover:bg-gray-400 w-fit px-2.5 py-1 text-md ml-auto text-gray-600' />
            </div>

            <div className='mt-3'>
                <BasicTable />
            </div>

        </div>
    );
}

export default TicketsPage;