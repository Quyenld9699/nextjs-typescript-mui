import { Button } from '@mui/material';
import useNotifier from 'src/hooks/useNotifier';

export default function Home() {
    const { notifySuccess } = useNotifier();
    return (
        <>
            <main>
                <Button variant="contained" onClick={() => notifySuccess('Em chào anh Quyền ạ!')}>
                    Hello
                </Button>
                Hello
                <div></div>
            </main>
        </>
    );
}
