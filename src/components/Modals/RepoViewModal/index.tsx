import { useEffect } from "react";

import { RepoTypes } from "../../../@types";

interface RepoViewModalProps {
  currentRepo: RepoTypes;
}

export const RepoViewModal = ({ currentRepo }: RepoViewModalProps) => {
  useEffect(() => {
    console.log(currentRepo);
  }, [currentRepo]);

  return (
    <div>
      <h1>{currentRepo.name}</h1>
    </div>
  );
};
