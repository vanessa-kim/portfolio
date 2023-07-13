import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormWrapper } from './Style';

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
    clearErrors,
    reset,
  } = useForm<IForm>({ mode: 'onChange' });

  // emailJs에서 호환되는 formElement를 동적으로 생성해주는 이벤트
  const FormElementMaker = (data: any) => {
    const form = document.createElement('form');

    Object.keys(data).forEach((key: string) => {
      const hiddenField = document.createElement('input');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', data[key]);
      hiddenField.setAttribute('type', 'text');
      form.appendChild(hiddenField);
    });

    return form;
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
    <FormWrapper onSubmit={handleSubmit(sendEmail)}>
      <div className="form-row">
        <div>
          <label>이름</label>
          <input
            {...register('user_name', { required: true, onChange: () => clearErrors('user_name') })}
            className={errors.user_name ? 'error' : ''}
          />
        </div>
        {errors.user_name ? <p>이름은 필수 값입니다. 입력해주세요.</p> : null}
      </div>
      <div className="form-row">
        <div>
          <label>답변을 받을 이메일</label>
          <input
            {...register('user_email', { required: true, onChange: () => clearErrors('user_email') })}
            className={errors.user_email ? 'error' : ''}
          />
        </div>
        {errors.user_email ? <p>메일은 필수 값입니다. 입력해주세요.</p> : null}
      </div>
      <div className="form-row">
        <div>
          <label>메세지</label>
          <textarea
            {...register('message', { required: true, onChange: () => clearErrors('message') })}
            className={errors.message ? 'error' : ''}
          />
        </div>
        {errors.message ? <p>메세지는 필수 값입니다. 입력해주세요.</p> : null}
      </div>
      <div className="form-row button-group">
        <button type="button" onClick={() => reset()}>
          초기화
        </button>
        <button type="submit">메일 보내기</button>
      </div>
    </FormWrapper>
  );
}

export default Contact;
