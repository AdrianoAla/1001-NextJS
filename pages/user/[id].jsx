import {useRouter} from 'next/router'

export default function User({user}) {
    const router = useRouter()
    const {id} = router.query
    
    return (
        <div>
            <h1>Get out of here! this is a work in progress :)</h1>
        </div>
    )
}