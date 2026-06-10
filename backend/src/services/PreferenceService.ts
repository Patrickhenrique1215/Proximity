import { CreatePreferenceDTO } from "../schemas/preferenceSchema";
import {
    criarPreferenciaRepository,
    listarPreferenciasPorUsuarioRepository,
    buscarPreferenciaPorIdRepository,
    deletarPreferenciaRepository
} from "../repositories/PreferenceRepository";

export async function criarPreferenciaService(preferencia: CreatePreferenceDTO) {
    await criarPreferenciaRepository(preferencia);
}

export async function listarPreferenciasPorUsuarioService(userId: number) {
    return await listarPreferenciasPorUsuarioRepository(userId);
}

export async function deletarPreferenciaService(id: number) {
    const preferencia = await buscarPreferenciaPorIdRepository(id);

    if (!preferencia) {
        throw new Error("Preferência não encontrada.");
    }

    await deletarPreferenciaRepository(id);
}