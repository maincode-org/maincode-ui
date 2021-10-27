import { ICoord } from '../types';

export const initCannon = (cannon: SVGSVGElement, cannonBallPos: ICoord): void => {
  cannon.style.height = '15%';
  cannon.style.width = '15%';
  cannon.style.left = `calc(${cannonBallPos.x}px - 12%)`;
  cannon.style.bottom = `${cannonBallPos.y}px`;
  cannon.style.position = 'absolute';
  cannon.style.transform = 'rotateZ(30deg)';
};

export const initCannonBall = (cannonBall: HTMLElement): void => {
  cannonBall.style.position = 'absolute';
  cannonBall.style.bottom = '-2%';
  cannonBall.style.left = '-2%';
  cannonBall.style.background = 'black';
  cannonBall.style.width = '4%';
  cannonBall.style.height = '4%';
  cannonBall.style.borderRadius = '100%';
  cannonBall.style.visibility = 'hidden';
  cannonBall.style.zIndex = '2';
};

export const applyCannonWheelStyle = (cannonWheel: SVGSVGElement): void => {
  cannonWheel.style.transformBox = 'fill-box';
  cannonWheel.style.transformOrigin = 'center';
  cannonWheel.style.transform = 'translateX(30px)';
};

export const initTestSquare = (testSquare: HTMLDivElement, xPos: number, yPos: number, shouldRender: boolean): void => {
  testSquare.style.width = '5%';
  testSquare.style.height = '5%';
  testSquare.style.background = 'blue';
  testSquare.style.position = 'absolute';
  testSquare.style.left = `${xPos}px`;
  testSquare.style.bottom = `${yPos}px`;
  testSquare.style.display = shouldRender ? 'inline' : 'none';
};
