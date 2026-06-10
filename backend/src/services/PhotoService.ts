import { CreatePhotoDTO } from "../schemas/photoSchema";
import { 
    criarFotoRepository, 
    listarFotosPorUsuarioRepository,
    buscarFotoPorIdRepository,
    deletarFotoRepository 
} from "../repositories/PhotoRepository";

export async function criarFotoService(foto: CreatePhotoDTO) {
    // Na fase 3, poderíamos validar se o usuário existe, mas na fase 2 salvamos direto
    await criarFotoRepository(foto);
}

export async function listarFotosPorUsuarioService(userId: number) {
    return await listarFotosPorUsuarioRepository(userId);
}

export async function deletarFotoService(id: number) {
    const foto = await buscarFotoPorIdRepository(id);
    
    if (!foto) {
        throw new Error("Foto não encontrada.");
    }

    await deletarFotoRepository(id);
}