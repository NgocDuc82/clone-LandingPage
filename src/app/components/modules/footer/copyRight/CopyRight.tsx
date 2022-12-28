import React from "react";

import 'app/components/modules/footer/copyRight/CopyRight.scss'

const CopyRight:React.FC = (): React.ReactElement => {
  return (
    <div className="CopyRight">
      <p className="content">TheBox Company © 2022. All Rights Reserved</p>
    </div>
  );
};
export default CopyRight;
