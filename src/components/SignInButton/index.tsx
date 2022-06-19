import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

export default function SignInButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <button type="button" className={styles.signInButton} 
                    onClick={() => signOut()}>
                    <FaGithub color="#84d361" />
                    {session.user.name}
                    <FiX color="#737380" className={styles.closeIcon} />
                </button>
            </>
        )
    }
    return (
        <>
            <button type="button" className={styles.signInButton} 
                onClick={() => signIn()}>
                <FaGithub color="#eba417" />Sign in with Github
            </button>
        </>
    )
}