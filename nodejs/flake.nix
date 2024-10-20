{
  description = "Local development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
  };

  outputs = { self, nixpkgs }:
    let
      pkgs = import nixpkgs { system = "x86_64-linux"; };
    in {
      devShells.x86_64-linux.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
          pkgs.zellij
          # 他のパッケージを追加
        ];

        shellHook = ''
          echo "Welcome to the local development environment"
        '';
      };
    };
}
