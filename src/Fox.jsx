import {useAnimations, useGLTF} from '@react-three/drei'
import { useEffect } from 'react';
import {useControls} from 'leva'
export default function Fox(props){
    const fox = useGLTF("./Fox/glTF/Fox.gltf")
    const animations = useAnimations(fox.animations, fox.scene)

    const {animationName } = useControls({
        animationName: {options: animations.names}
    })


    useEffect(()=>{
        const action = animations.actions[animationName]
        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () =>{
            action.fadeOut(0.5)
        }
        
    }, [animationName]);

    return<>
        <primitive {...props} object={fox.scene}/>   
    </>
}