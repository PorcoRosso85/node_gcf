{
  description = "Development environment with two mkShell flake inputs";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    mkShellRepo1.url = "github:PorcoRosso85/home/main?dir=dev/typescript";
    mkShellRepo2.url = "path:./nix";
  };

  outputs = { self, nixpkgs, mkShellRepo1, mkShellRepo2 }:
    let
      # mkShellを呼び出す
      shell1 = mkShellRepo1.outputs.devShells.x86_64-linux.default or mkShellRepo1.outputs.devShells.default;
      shell2 = mkShellRepo2.outputs.devShells.x86_64-linux.default or mkShellRepo2.outputs.devShells.default;

      # nixpkgsのインスタンスを取得
      pkgs = import nixpkgs { system = "x86_64-linux"; };
    in {
      devShells.x86_64-linux.default = pkgs.mkShell {
        # shell1とshell2を組み合わせて使用
        buildInputs = shell1.buildInputs ++ shell2.buildInputs;
        
        # 環境変数や他の設定を組み合わせる
        shellHook = ''
          ${shell1.shellHook or ""}
          ${shell2.shellHook or ""}
        '';
      };
    };
}

