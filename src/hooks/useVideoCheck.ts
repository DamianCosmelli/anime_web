import { useState, useEffect } from 'react';
import { ValidateVideo } from '../services/ValidateVideoService'


export const useVideoCheck = (youTuveId:string) => {
    const [videoCheck, setVideoCheck] = useState<boolean | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getVideoCheck = async () => {
            try {
                const check = await ValidateVideo(youTuveId);
                setVideoCheck(check);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getVideoCheck();
    });

    return { videoCheck, loading, error };
};