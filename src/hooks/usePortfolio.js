import { useResource } from "./useResource";
import * as service from "../services/portfolioService";

// Satu hook per jenis data. Komponen hanya memakai hook ini.
export const useProfile = () => useResource(service.getProfile);
export const useSocialLinks = () => useResource(service.getSocialLinks);
export const useFocusAreas = () => useResource(service.getFocusAreas);
export const useProcessSteps = () => useResource(service.getProcessSteps);
export const useEducation = () => useResource(service.getEducation);
export const useExperiences = (type) =>
  useResource(() => service.getExperiences(type), [type]);
export const useSkillCategories = () => useResource(service.getSkillCategories);
export const useProjects = () => useResource(service.getProjects);
export const useGraphicProfile = () => useResource(service.getGraphicProfile);
export const useGraphicDesigns = () => useResource(service.getGraphicDesigns);
export const useCertifications = () => useResource(service.getCertifications);
