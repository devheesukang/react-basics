import { useReducer, useCallback } from 'react';

function useInputs(initialForm) {
//   const [form, setForm] = useState(initialForm);
    const reducer = (form, action) => {
        switch (action.type) {
        case 'CHANGE':
            return {
            ...form,
            [action.name]: action.value
            };
        case 'RESET':
            return initialForm;
        default:
            return form;
        }
    };
    const [form, dispatch] = useReducer(reducer, initialForm);
  // change
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setForm(form => ({ ...form, [name]: value }));
//   }, []);
//   const reset = useCallback(() => setForm(initialForm), [initialForm]);
    
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', name, value });
    }, []);
    const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
  return [form, onChange, reset];
}

export default useInputs;