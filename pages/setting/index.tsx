import React, { useState } from "react";
import { EmptyLayout } from "layouts";
import styled from "styles/styled";
import { Button } from "styles";
import { css } from "@emotion/core";

interface IProfile {
  image?: string;
  intro?: string;
}

const Setting = () => {
  const imageUploadRef = React.useRef<HTMLInputElement | null>(null);

  const [profile, setProfile] = useState<IProfile>({ image: "", intro: "" });

  const clickUploadInput = () => {
    if (!imageUploadRef.current) return;
    imageUploadRef.current!.click();
  };

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log(Object.entries(files!));
  };

  const autoIncreaseHeight = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    target.style.height = `${target.scrollHeight + 2}px`;
  };

  const handleIntroTextArea = () => {};

  return (
    <>
      <SettingWrap>
        <LabelArea>프로필</LabelArea>
        <SettingArea>
          <Button width={150} onClick={clickUploadInput}>
            이미지 업로드
            <input ref={imageUploadRef} type={"file"} onChange={uploadFile} style={{ display: "none" }} />
          </Button>
          <InputComment name={"intro"} value={profile.intro} onChange={handleIntroTextArea} onInput={autoIncreaseHeight} placeholder={"댓글을 남겨주세요."} />
        </SettingArea>
      </SettingWrap>
    </>
  );
};

export default EmptyLayout(Setting);

const Border = css`
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const SettingWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  ${Border}
`;

const LabelArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 200px;
  max-width: 300px;
  font-size: 1rem;
  color: #313131;
  font-weight: 500;
  background-color: #d9edff;
`;

const SettingArea = styled.div`
  display: flex;
  flex-direction column;
  justify-content: center;
  flex: 1;
  padding: 1.5rem;
`;

const InputComment = styled.textarea`
  margin-top: 1rem;
  padding: 0.625rem;
  width: 100%;
  min-height: 5rem;
  font-size: 1rem;
  line-height: 1.75;
  ${Border}
  resize: none;
`;
