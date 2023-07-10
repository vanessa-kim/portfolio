import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IForm {
  user_name: string;
  user_email: string;
  message: string;
}

function Contact() {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<IForm>({ mode: 'onChange' });

  // emailJs에서 호환되는 formElement를 동적으로 생성해주는 이벤트
  const FormElementMaker = (data: any) => {
    const test = document.createElement('form');
    test.setAttribute('id', 'form');
    const hiddenField = document.createElement('input');
    hiddenField.setAttribute('name', 'user_name');
    hiddenField.setAttribute('value', data.user_name);
    hiddenField.setAttribute('type', 'text');
    const hiddenField2 = document.createElement('input');
    hiddenField2.setAttribute('name', 'user_email');
    hiddenField2.setAttribute('value', data.user_email);
    hiddenField2.setAttribute('type', 'text');
    const hiddenField3 = document.createElement('input');
    hiddenField3.setAttribute('name', 'message');
    hiddenField3.setAttribute('value', data.message);
    hiddenField3.setAttribute('type', 'text');
    test.appendChild(hiddenField);
    test.appendChild(hiddenField2);
    test.appendChild(hiddenField3);
    return test;
  };

  // 메일 보내기 이벤트
  const sendEmail: SubmitHandler<IForm> = async (data) => {
    if (Object.keys(errors).length > 0 || !isValid) return;

    try {
      const result = await emailjs.sendForm('service-vanessa', 'template_13k5i08', FormElementMaker(data), 'fm7oF7rpZ--KdiXEG');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <label>이름</label>
      <input {...register('user_name', { required: true })} className={errors.user_name ? 'error' : ''} />
      {errors.user_name ? '이름은 필수 값입니다. 입력해주세요.' : ''}
      <label>답변을 받을 이메일</label>
      <input {...register('user_email', { required: true })} />
      {errors.user_email ? '메일은 필수 값입니다. 입력해주세요.' : ''}
      <label>메세지</label>
      <textarea {...register('message', { required: true })} />
      {errors.message ? '메세지는 필수 값입니다. 입력해주세요.' : ''}
      <input type="submit" />
    </form>
  );
}

export default Contact;
