import { writeFileSync } from "fs";
import { ResumeBuilder } from "../blocks/ResumeBuilder";
import { compileToPdf } from "../compile";
import mockResume from "./mockResume";
import { paths } from "../../utils/path";

function testBlocks() {
  const builder = new ResumeBuilder();

  builder
    .setBase()
    .setHeader(mockResume?.personalInfo?.name, mockResume?.personalInfo?.contact)
    .addProfile(mockResume?.personalInfo?.description)
    .addExperience(mockResume.experiences);

  const resumeString = builder.build();
  //write to file for debugging
  writeFileSync(paths.outputTypst, resumeString);

  compileToPdf(paths.outputTypst, paths.output);
}

testBlocks();


