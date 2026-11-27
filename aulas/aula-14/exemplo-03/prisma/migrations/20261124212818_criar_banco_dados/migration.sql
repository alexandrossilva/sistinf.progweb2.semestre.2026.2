/*
  Warnings:

  - You are about to drop the `grupo_usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `grupo_usuario` DROP FOREIGN KEY `grupo_usuario_idGrupo_fkey`;

-- DropForeignKey
ALTER TABLE `grupo_usuario` DROP FOREIGN KEY `grupo_usuario_idUsuario_fkey`;

-- DropTable
DROP TABLE `grupo_usuario`;

-- CreateTable
CREATE TABLE `GrupoUsuario` (
    `idGrupo` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,

    PRIMARY KEY (`idGrupo`, `idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GrupoUsuario` ADD CONSTRAINT `GrupoUsuario_idGrupo_fkey` FOREIGN KEY (`idGrupo`) REFERENCES `Grupo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GrupoUsuario` ADD CONSTRAINT `GrupoUsuario_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
